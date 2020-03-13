export class ProductService{
  getProducts(){
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: new Date("May 31, 2016"),
        description: "Cras sit amet nibh libero, in gravida...",
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: new Date("October 31, 2016"),
        description: "Cras sit amet nibh libero, in gravida...",
        rating: 4,
        numOfReviews: 12
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: new Date("July 30, 2016"),
        description: "Cras sit amet nibh libero, in gravida...",
        rating: 5,
        numOfReviews: 2
      }
    ]
  }
}
