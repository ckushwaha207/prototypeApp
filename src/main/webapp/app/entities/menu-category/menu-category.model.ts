export class MenuCategory {
    constructor(
        public id?: number,
        public name?: string,
        public parentCategoryId?: number,
        public itemsId?: number,
        public menuId?: number,
    ) { }
}
