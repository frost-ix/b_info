interface Category {
  categoryId: string;
  categoryName: string;
  subCategory: string[];
  description: string;
}

interface CategoryList {
  categoryList: Category[];
}

export type { Category, CategoryList };
