export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  detailedDescription?: string; // New field for extended product information
  features: string[];
  image: string;
  technicalSpecs?: { [key: string]: string }; // New field for technical specs
  pdfUrl?: string; // Add PDF URL
};

export type Category = {
  name: string;
  slug: string;
  image: string;
  description: string;
  subcategories: SubCategory[];
};

export type SubCategory = {
  name: string;
  slug: string;
};

export const categories: Category[] = [
  {
    name: "Scissors",
    slug: "scissors",
    image: "/lovable-uploads/surgical-scissors-category.jpg",
    description: "High-precision surgical scissors for various medical procedures.",
    subcategories: [
      { name: "Dressing Scissors", slug: "dressing-scissors" },
      { name: "Iris Scissors", slug: "iris-scissors" },
      { name: "Surgical Scissors", slug: "surgical-scissors" },
      { name: "Mayo Scissors", slug: "mayo-scissors" },
      { name: "Metzenbaum Scissors", slug: "metzenbaum-scissors" },
      { name: "Tungsten Carbide Scissors", slug: "tungsten-carbide-scissors" }
    ]
  },
  {
    name: "Needle Holders",
    slug: "needle-holders",
    image: "/lovable-uploads/needle-holders-category.jpg",
    description: "Precision-engineered needle holders for suturing procedures.",
    subcategories: [
      { name: "Webster Needle Holders", slug: "webster-needle-holders" },
      { name: "Mayo-Hegar Needle Holders", slug: "mayo-hegar-needle-holders" },
      { name: "Crile-Wood Needle Holders", slug: "crile-wood-needle-holders" },
      { name: "Debakey Needle Holders", slug: "debakey-needle-holders" }
    ]
  },
  {
    name: "Forceps",
    slug: "forceps",
    image: "/lovable-uploads/forceps-category.jpg",
    description: "Superior quality forceps for grasping, manipulating, or extracting.",
    subcategories: [
      { name: "Mosquito Artery Forceps", slug: "mosquito-artery-forceps" },
      { name: "Crile Artery Forceps", slug: "crile-artery-forceps" },
      { name: "Kelly Forceps", slug: "kelly-forceps" },
      { name: "Tissue Forceps", slug: "tissue-forceps" },
      { name: "Adson Forceps", slug: "adson-forceps" },
      { name: "Dissecting Forceps", slug: "dissecting-forceps" }
    ]
  },
  {
    name: "Retractors",
    slug: "retractors",
    image: "/lovable-uploads/retractors-category.jpg",
    description: "Essential retractors for optimal surgical field exposure.",
    subcategories: [
      { name: "Army Pattern Retractors", slug: "army-pattern-retractors" },
      { name: "Finochietto Retractors", slug: "finochietto-retractors" },
      { name: "Langenbeck Retractors", slug: "langenbeck-retractors" },
      { name: "Self-retaining Retractors", slug: "self-retaining-retractors" },
      { name: "Weitlaner Retractors", slug: "weitlaner-retractors" }
    ]
  },
  {
    name: "Bone Instruments",
    slug: "bone-instruments",
    image: "/lovable-uploads/bone-instruments-category.jpg",
    description: "Durable bone instruments designed for orthopedic procedures.",
    subcategories: [
      { name: "Bone Files", slug: "bone-files" },
      { name: "Bone Cutters", slug: "bone-cutters" },
      { name: "Bone Levers", slug: "bone-levers" },
      { name: "Bone Rongeurs", slug: "bone-rongeurs" }
    ]
  },
  {
    name: "Specialty Instruments",
    slug: "specialty-instruments",
    image: "/lovable-uploads/specialty-instruments-category.jpg",
    description: "Specialized instruments for specific medical procedures.",
    subcategories: [
      { name: "Malleable Retractors", slug: "malleable-retractors" },
      { name: "Tonsil Instruments", slug: "tonsil-instruments" },
      { name: "Vascular Clamps", slug: "vascular-clamps" },
      { name: "Suture Instruments", slug: "suture-instruments" },
      { name: "Nasal Instruments", slug: "nasal-instruments" }
    ]
  }
];

export const products: Product[] = [
  {
    id: "s1",
    name: "Standard Dressing Scissors",
    category: "scissors",
    subcategory: "dressing-scissors",
    description: "High-quality stainless steel dressing scissors for general medical use.",
    detailedDescription: "Our Standard Dressing Scissors are crafted from premium surgical-grade stainless steel, ensuring longevity and precision in daily medical applications. The blunt-tipped design provides enhanced safety when cutting dressings near patient skin, while the ergonomic handle offers superior control during extended use. Each pair undergoes rigorous quality control to ensure consistent performance across all medical environments.",
    features: [
      "Surgical-grade stainless steel construction",
      "Autoclavable up to 134°C",
      "Sharp, precision-ground cutting edges",
      "Ergonomic finger rings for comfort",
      "Available in 14cm, 16cm, and 18cm lengths"
    ],
    image: "/surgical-equipment/Scissor1.png",
    technicalSpecs: {
      "Material": "Surgical Grade 420 Stainless Steel",
      "Finish": "Satin",
      "Sterilization": "Autoclave, EtO, Steam",
      "Hardness": "HRC 50-52",
      "Manufacturing": "German Precision Forging"
    },
    pdfUrl: "/pdfs/scissors/standard-dressing-scissors.pdf"
  },
  {
    id: "s2",
    name: "Premium Iris Scissors",
    category: "scissors",
    subcategory: "iris-scissors",
    description: "Fine, delicate scissors designed for precision work in ophthalmic procedures.",
    detailedDescription: "Apex Surgical's Premium Iris Scissors represent the pinnacle of microsurgical precision instruments. Designed specifically for ophthalmic procedures, these ultra-fine scissors feature meticulously honed cutting edges capable of the most delicate tissue dissection. The lightweight design reduces hand fatigue during lengthy procedures, while the specialized spring-loaded handles provide incomparable control and tactile feedback essential for microsurgical applications.",
    features: [
      "German surgical stainless steel",
      "Ultra-fine precision-ground tips",
      "Spring-action handles reduce fatigue",
      "Available in straight, curved, or angled configurations",
      "Micro-serrated blade option available"
    ],
    image: "/surgical-equipment/Scissor2.png",
    technicalSpecs: {
      "Material": "German High-Carbon Stainless Steel",
      "Finish": "Mirror Polish",
      "Sterilization": "Autoclave, EtO, Steam",
      "Tip Width": "0.2mm",
      "Manufacturing": "Swiss Precision Engineering"
    },
    pdfUrl: "/pdfs/scissors/premium-iris-scissors.pdf"
  },
  {
    id: "s3",
    name: "Heavy-Duty Mayo Scissors",
    category: "scissors",
    subcategory: "mayo-scissors",
    description: "Robust scissors for cutting through heavy materials during surgical procedures.",
    detailedDescription: "Designed for strength and durability, our Heavy-Duty Mayo Scissors excel in cutting through tough tissues, gauze, and sutures. The robust construction features specially hardened blades that maintain their sharpness through countless procedures. The unique blade geometry creates a precision shearing action that reduces hand strain while providing clean cuts through even the most challenging materials. Available in both straight and curved configurations, these scissors are a staple in general surgery, orthopedics, and emergency medicine.",
    features: [
      "Extra-strong cutting edges maintain sharpness",
      "Ergonomic design with extended finger rings",
      "Available in straight or curved blade options",
      "Precision-aligned blades for exceptional cutting performance",
      "Tungsten carbide insert option for extended life"
    ],
    image: "/surgical-equipment/Scissor3.png",
    technicalSpecs: {
      "Material": "440C Stainless Steel",
      "Finish": "Satin",
      "Sterilization": "All Standard Methods",
      "Hardness": "HRC 56-58",
      "Manufacturing": "Precision German Engineering"
    },
    pdfUrl: "/pdfs/scissors/heavy-duty-mayo-scissors.pdf"
  },
  {
    id: "nh1",
    name: "Premium Webster Needle Holder",
    category: "needle-holders",
    subcategory: "webster-needle-holders",
    description: "Lightweight needle holder ideal for delicate procedures and fine sutures.",
    detailedDescription: "The Premium Webster Needle Holder is expertly crafted for delicate surgical procedures requiring fine sutures. Its lightweight design minimizes hand fatigue, allowing for greater precision and control. The tungsten carbide inserts ensure a secure grip on needles of various sizes, enhancing surgical accuracy and efficiency.",
    features: [
      "Tungsten carbide inserts",
      "Precision jaw alignment",
      "Ratchet lock mechanism",
      "Ergonomic handle design"
    ],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZ2ljYWwlMjBpbmlzdHJ1bWVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "High-Grade Stainless Steel",
      "Jaw Material": "Tungsten Carbide",
      "Handle Type": "Ergonomic",
      "Locking Mechanism": "Ratchet Lock",
      "Length": "15 cm"
    },
    pdfUrl: "/pdfs/needle-holders/premium-webster-needle-holder.pdf"
  },
  {
    id: "nh2",
    name: "Surgical Mayo-Hegar Needle Holder",
    category: "needle-holders",
    subcategory: "mayo-hegar-needle-holders",
    description: "Versatile needle holder suitable for a wide range of suturing procedures.",
    detailedDescription: "The Surgical Mayo-Hegar Needle Holder is a versatile instrument designed for a broad spectrum of suturing procedures. Constructed from premium German stainless steel, it offers exceptional durability and resistance to corrosion. The serrated jaws provide a secure grip on needles, ensuring precise suture placement and reliable performance in various surgical settings.",
    features: [
      "German stainless steel construction",
      "Serrated jaws for secure grip",
      "Smooth ratchet mechanism",
      "Available in multiple sizes"
    ],
    image: "https://images.unsplash.com/photo-1618630834230-f396911153e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cmdpY2FsJTIwaW5pc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "German Stainless Steel",
      "Jaw Type": "Serrated",
      "Handle Design": "Ergonomic",
      "Sizes Available": "15 cm, 18 cm, 20 cm",
      "Sterilization": "Autoclavable"
    },
    pdfUrl: "/pdfs/needle-holders/surgical-mayo-hegar-needle-holder.pdf"
  },
  {
    id: "f1",
    name: "Mosquito Artery Forceps - Straight",
    category: "forceps",
    subcategory: "mosquito-artery-forceps",
    description: "Delicate hemostatic forceps for clamping small blood vessels.",
    detailedDescription: "Mosquito Artery Forceps are essential for delicate hemostasis during surgical procedures. These forceps feature fine, precise tips that allow for accurate clamping of small blood vessels. The straight design provides optimal control and visibility, making them ideal for use in confined surgical spaces.",
    features: [
      "Fine, precise tips",
      "Secure ratchet locking",
      "Available in straight and curved designs",
      "Satin finish to reduce glare"
    ],
    image: "https://images.unsplash.com/photo-1585409672139-4c394998695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cmdpY2FsJTIwaW5pc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "Stainless Steel",
      "Tip Type": "Fine",
      "Locking Mechanism": "Ratchet",
      "Length": "12.5 cm",
      "Finish": "Satin"
    },
    pdfUrl: "/pdfs/forceps/mosquito-artery-forceps-straight.pdf"
  },
  {
    id: "f2",
    name: "Adson Tissue Forceps",
    category: "forceps",
    subcategory: "adson-forceps",
    description: "Precision tissue forceps with fine teeth for secure tissue handling.",
    detailedDescription: "Adson Tissue Forceps are designed for precision tissue handling during surgical procedures. The fine teeth provide a secure grip on tissues without causing damage. Their delicate design and excellent balance make them ideal for use in plastic surgery, dermatology, and other procedures requiring meticulous tissue manipulation.",
    features: [
      "1x2 teeth for secure grip",
      "Delicate design for precision work",
      "Excellent balance and feel",
      "Premium stainless steel construction"
    ],
    image: "https://images.unsplash.com/photo-1628201858994-ca947c4c451a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cmdpY2FsJTIwaW5pc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "Premium Stainless Steel",
      "Teeth Configuration": "1x2",
      "Handle Type": "Flat",
      "Length": "12 cm",
      "Application": "Tissue Handling"
    },
    pdfUrl: "/pdfs/forceps/adson-tissue-forceps.pdf"
  },
  {
    id: "r1",
    name: "Finochietto Rib Spreader",
    category: "retractors",
    subcategory: "finochietto-retractors",
    description: "Self-retaining retractor designed specifically for thoracic procedures.",
    detailedDescription: "The Finochietto Rib Spreader is an essential tool for thoracic surgeons, providing optimal access and visualization during rib cage procedures. Its self-retaining design allows surgeons to focus on the operation without needing an assistant to hold the retraction. The smooth ratchet mechanism ensures precise and secure rib separation, enhancing surgical outcomes.",
    features: [
      "Smooth ratchet mechanism",
      "Removable blades",
      "Durable construction",
      "Available in multiple sizes"
    ],
    image: "https://images.unsplash.com/photo-1629453439435-5e9e39464999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1cmdpY2FsJTIwaW5pc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "Stainless Steel",
      "Blade Type": "Removable",
      "Mechanism": "Ratchet",
      "Sizes Available": "Small, Medium, Large",
      "Application": "Thoracic Surgery"
    },
    pdfUrl: "/pdfs/retractors/finochietto-rib-spreader.pdf"
  },
  {
    id: "r2",
    name: "Weitlaner Retractor",
    category: "retractors",
    subcategory: "weitlaner-retractors",
    description: "Self-retaining retractor with sharp prongs for secure tissue holding.",
    detailedDescription: "The Weitlaner Retractor is a self-retaining instrument with sharp prongs, designed to provide secure and reliable tissue retraction during surgical procedures. Its ratchet locking mechanism allows for adjustable tension, ensuring optimal exposure of the surgical site. Available in multiple sizes and prong configurations, it is suitable for a variety of surgical applications.",
    features: [
      "Self-retaining design",
      "Ratchet locking mechanism",
      "Available in multiple sizes",
      "Sharp or blunt prong options"
    ],
    image: "https://images.unsplash.com/photo-1576764937334-5964c7349fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1cmdpY2FsJTIwaW5pc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "Stainless Steel",
      "Prong Type": "Sharp or Blunt",
      "Locking Mechanism": "Ratchet",
      "Sizes Available": "Small, Medium, Large",
      "Application": "Tissue Retraction"
    },
    pdfUrl: "/pdfs/retractors/weitlaner-retractor.pdf"
  },
  {
    id: "b1",
    name: "Liston Bone Cutter",
    category: "bone-instruments",
    subcategory: "bone-cutters",
    description: "Heavy-duty bone cutting forceps for orthopedic procedures.",
    detailedDescription: "The Liston Bone Cutter is a heavy-duty instrument designed for orthopedic procedures requiring precise bone cutting. Its double-action cutting mechanism and hardened cutting edges ensure efficient and clean cuts through bone tissue. The ergonomic handles provide a comfortable grip and optimal control, enhancing surgical precision.",
    features: [
      "Double-action cutting mechanism",
      "Hardened cutting edges",
      "Ergonomic handles",
      "Autoclavable"
    ],
    image: "https://plus.unsplash.com/premium_photo-1664298449344-755218495991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9uZSUyMGN1dHRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "High-Carbon Steel",
      "Cutting Mechanism": "Double-Action",
      "Handle Type": "Ergonomic",
      "Sterilization": "Autoclavable",
      "Application": "Orthopedic Surgery"
    },
    pdfUrl: "/pdfs/bone-instruments/liston-bone-cutter.pdf"
  },
  {
    id: "b2",
    name: "Bone Rongeur",
    category: "bone-instruments",
    subcategory: "bone-rongeurs",
    description: "Precision bone rongeur for fine bone work and fragment removal.",
    detailedDescription: "The Bone Rongeur is a precision instrument designed for fine bone work and fragment removal during orthopedic and neurosurgical procedures. Its precise jaw alignment and double-action spring mechanism ensure smooth and controlled bone removal. Available in multiple tip shapes, it is suitable for a variety of surgical applications requiring meticulous bone manipulation.",
    features: [
      "Precise jaw alignment",
      "Double-action spring",
      "Available in multiple tip shapes",
      "Durable construction"
    ],
    image: "https://images.unsplash.com/photo-1628873065434-bf9c38195966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9uZSUyMHJvbmdldXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    technicalSpecs: {
      "Material": "Stainless Steel",
      "Jaw Alignment": "Precise",
      "Spring Mechanism": "Double-Action",
      "Tip Shapes": "Multiple Options",
      "Application": "Orthopedic & Neurosurgery"
    },
    pdfUrl: "/pdfs/bone-instruments/bone-rongeur.pdf"
  },
  {
    id: "sp1",
    name: "Malleable Ribbon Retractor",
    category: "specialty-instruments",
    subcategory: "malleable-retractors",
    description: "Flexible retractor that can be shaped to fit specific surgical needs.",
    detailedDescription: "The Malleable Ribbon Retractor is a flexible instrument designed to be shaped to fit specific surgical needs. Its smooth edges prevent tissue damage, while its malleable design allows for customized retraction in various surgical sites. Available in multiple width options, it is an essential tool for surgeons requiring adaptable and atraumatic tissue manipulation.",
    features: [
      "Highly malleable design",
      "Smooth edges to prevent tissue damage",
      "Multiple width options",
      "Durable yet flexible material"
    ],
    image: "https://media.istockphoto.com/id/1369484244/photo/surgical-instruments-on-a-table.jpg?b=1&s=612x612&w=0&k=20&c=JClwJytj9mI_Jp6P9_Jv_Dy-I_CfJt90m0_lZTl5wMw=",
    technicalSpecs: {
      "Material": "Malleable Metal",
      "Edge Type": "Smooth",
      "Width Options": "Multiple",
      "Flexibility": "High",
      "Application": "General Surgery"
    },
    pdfUrl: "/pdfs/specialty-instruments/malleable-ribbon-retractor.pdf"
  }
];

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(product => product.category === categorySlug);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getCategory = (slug: string) => {
  return categories.find(category => category.slug === slug);
};

export const getAllCategories = () => {
  return categories;
};
