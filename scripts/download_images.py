import os
import requests
from PIL import Image
from io import BytesIO

# Image URLs for each category using Picsum
IMAGE_URLS = {
    'surgical-instruments-hero': 'https://picsum.photos/1200/800',
    'surgical-scissors-category': 'https://picsum.photos/800/600',
    'needle-holders-category': 'https://picsum.photos/800/600?random=1',
    'forceps-category': 'https://picsum.photos/800/600?random=2',
    'retractors-category': 'https://picsum.photos/800/600?random=3',
    'bone-instruments-category': 'https://picsum.photos/800/600?random=4',
    'specialty-instruments-category': 'https://picsum.photos/800/600?random=5'
}

def download_and_optimize_image(url, output_path):
    try:
        # Download image
        response = requests.get(url)
        response.raise_for_status()
        
        # Open image and convert to RGB if necessary
        img = Image.open(BytesIO(response.content))
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
            
        # Save optimized image
        img.save(output_path, 'JPEG', quality=85, optimize=True)
        print(f'Downloaded and optimized: {output_path}')
        print(f'Size: {os.path.getsize(output_path) / 1024:.1f} KB')
        
    except Exception as e:
        print(f'Error processing {url}: {str(e)}')

def main():
    # Create output directory if it doesn't exist
    output_dir = 'public/lovable-uploads'
    os.makedirs(output_dir, exist_ok=True)
    
    # Download and optimize each image
    for name, url in IMAGE_URLS.items():
        output_path = os.path.join(output_dir, f'{name}.jpg')
        download_and_optimize_image(url, output_path)

if __name__ == '__main__':
    main() 