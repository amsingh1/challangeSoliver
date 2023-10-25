export interface Coat {
    colorImages: string[];
    sizes: string[];
    images: string[];
    productName: string;
    details: {
      pattern: string;
      collar: string;
      fastener: string;
      sleeves: string;
      pockets: string;
      details: string;
      back: string;
    };
    fit: {
      fit: string;
      backLength: string;
    };
    materialCare: {
      fabric: string;
      quality: string;
      filling: string;
      lining: string;
      levelOfWarmth: string;
      materialComposition: string;
      
    };
    price: string;
  }
  