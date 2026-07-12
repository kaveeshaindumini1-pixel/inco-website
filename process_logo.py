from PIL import Image

def process_logo(in_path, out_path):
    try:
        img = Image.open(in_path).convert("RGBA")
        width, height = img.size
        
        pixels = img.load()
        
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                
                # Make white/near-white background transparent
                if r > 230 and g > 230 and b > 230:
                    pixels[x, y] = (255, 255, 255, 0)
                
                # If it's on the right side of the image (x > 40% of width)
                # and it's a dark pixel, make it white (for the "lino" text)
                # This ensures the blue "A" on the left remains perfectly intact!
                elif x > width * 0.40:
                    if r < 80 and g < 80 and b < 100:
                        pixels[x, y] = (255, 255, 255, a)
        
        img.save(out_path, "PNG")
        print("Logo processed: Background removed, text inverted for dark mode, 'A' untouched.")
    except Exception as e:
        print("Error processing image:", e)

process_logo("alino-logo.jpeg", "alino-logo.png")
