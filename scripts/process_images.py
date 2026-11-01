import os
from PIL import Image

SRC = r"C:\Users\camil\Downloads\SITE RS REFRIGERACAO"
LOGOS = os.path.join(SRC, "LOGOS")
IMGS = os.path.join(SRC, "IMAGENS SITE")
OUT = "public/images"
os.makedirs(OUT, exist_ok=True)

def matte_black_to_alpha(im):
    im = im.convert("RGB")
    r, g, b = im.split()
    import PIL.ImageChops as ImageChops
    alpha = ImageChops.lighter(ImageChops.lighter(r, g), b)
    out = Image.merge("RGBA", (r, g, b, alpha))
    return out

def autocrop(im, pad=12):
    rgb = im.convert("RGB")
    bbox = rgb.getbbox()
    if not bbox:
        return im
    # getbbox on RGB treats black(0) as background only if truly 0; use alpha channel instead if present
    return im

def bbox_from_alpha(im, threshold=8):
    alpha = im.split()[-1]
    bbox = alpha.point(lambda p: 255 if p > threshold else 0).getbbox()
    return bbox

# 1) Full logo lockup (RS icon + wordmark + slogan), transparent bg
logo = Image.open(os.path.join(LOGOS, "Logo Vetorial RS Refrigeração.png")).convert("RGB")
w, h = logo.size
logo_crop = logo.crop((0, 0, w, int(h * 0.615)))
logo_rgba = matte_black_to_alpha(logo_crop)
bbox = bbox_from_alpha(logo_rgba)
pad = 10
bbox = (max(bbox[0]-pad,0), max(bbox[1]-pad,0), min(bbox[2]+pad, logo_rgba.width), min(bbox[3]+pad, logo_rgba.height))
logo_rgba = logo_rgba.crop(bbox)
logo_rgba.save(os.path.join(OUT, "logo-rs-refrigeracao.png"))
print("logo full:", logo_rgba.size)

# 2) Icon-only mark (RS + snowflake, no wordmark), transparent bg, padded to square
icon_crop = logo.crop((0, 0, w, int(h * 0.40)))
icon_rgba = matte_black_to_alpha(icon_crop)
bbox2 = bbox_from_alpha(icon_rgba)
pad2 = 20
bbox2 = (max(bbox2[0]-pad2,0), max(bbox2[1]-pad2,0), min(bbox2[2]+pad2, icon_rgba.width), min(bbox2[3]+pad2, icon_rgba.height))
icon_rgba = icon_rgba.crop(bbox2)
# pad to square canvas
iw, ih = icon_rgba.size
side = max(iw, ih)
square = Image.new("RGBA", (side, side), (0,0,0,0))
square.paste(icon_rgba, ((side-iw)//2, (side-ih)//2), icon_rgba)
square.save(os.path.join(OUT, "rs-icon-mark.png"))
print("icon mark:", square.size)

# 3) Favicon set: icon on a graphite rounded-square background for legibility
bg_color = (10, 14, 20, 255)  # graphite/near-black
def make_favicon(size, out_name, bg=True):
    canvas = Image.new("RGBA", (size, size), bg_color if bg else (0,0,0,0))
    icon_resized = square.resize((int(size*0.8), int(size*0.8)), Image.LANCZOS)
    canvas.paste(icon_resized, ((size-icon_resized.width)//2, (size-icon_resized.height)//2), icon_resized)
    canvas.save(os.path.join(OUT, out_name))

make_favicon(180, "apple-touch-icon.png")
make_favicon(192, "icon-192.png")
make_favicon(512, "icon-512.png")
make_favicon(32, "favicon-32.png")
make_favicon(16, "favicon-16.png")

# favicon.ico multi-size
ico_sizes = [16, 32, 48]
ico_images = []
for s in ico_sizes:
    c = Image.new("RGBA", (s, s), bg_color)
    ic = square.resize((int(s*0.8), int(s*0.8)), Image.LANCZOS)
    c.paste(ic, ((s-ic.width)//2, (s-ic.height)//2), ic)
    ico_images.append(c)
ico_images[0].save(os.path.join(OUT, "favicon.ico"), format="ICO", sizes=[(s,s) for s in ico_sizes])
print("favicons done")

# 4) Convert product/background photos to optimized WebP
photo_map = {
    "Eletrodomésticos futuristas sob luz azul intensas.png": "hero-appliances.webp",
    "Fundo Futurista Neon Azul em Painéis Metálicos.png": "bg-panels.webp",
    "Técnico Reparando Geladeira em Luz Azul.png": "tecnico-reparo.webp",
    "Geladeira Moderna com Iluminação Azul.png": "geladeira.webp",
    "Freezer Horizontal Moderno em Luz Azul.png": "freezer.webp",
    "Máquina de Lavar em Estúdio Neon Azul.png": "maquina-lavar.webp",
    "Micro-ondas moderno com iluminação azul.png": "microondas.webp",
}
for src_name, out_name in photo_map.items():
    p = Image.open(os.path.join(IMGS, src_name)).convert("RGB")
    # cap max width at 1600 to keep filesize reasonable
    if p.width > 1600:
        ratio = 1600 / p.width
        p = p.resize((1600, int(p.height * ratio)), Image.LANCZOS)
    p.save(os.path.join(OUT, out_name), "WEBP", quality=80, method=6)
    print(out_name, p.size, os.path.getsize(os.path.join(OUT, out_name)))

print("ALL DONE")
