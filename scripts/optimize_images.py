import os
from PIL import Image
import glob

def optimize_image(input_path, output_path, quality=80, max_size=(1200, 800)):
    """
    Optimize an image for web use
    :param input_path: Path to input image
    :param output_path: Path to save optimized image
    :param quality: JPEG quality (1-100)
    :param max_size: Maximum dimensions (width, height)
    """
    try:
        # Open the image
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Resize if necessary
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save optimized image
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            print(f"Optimized: {input_path} -> {output_path}")
            print(f"Original size: {os.path.getsize(input_path) / 1024:.1f} KB")
            print(f"Optimized size: {os.path.getsize(output_path) / 1024:.1f} KB")
            
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")

def process_directory(input_dir, output_dir):
    """
    Process all images in a directory
    :param input_dir: Input directory path
    :param output_dir: Output directory path
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Process all images
    for img_path in glob.glob(os.path.join(input_dir, '*.jpg')) + glob.glob(os.path.join(input_dir, '*.png')):
        filename = os.path.basename(img_path)
        output_path = os.path.join(output_dir, filename)
        optimize_image(img_path, output_path)

if __name__ == "__main__":
    # Process images in the lovable-uploads directory
    input_dir = "public/lovable-uploads/raw"
    output_dir = "public/lovable-uploads"
    process_directory(input_dir, output_dir) 