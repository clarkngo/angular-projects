import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.component.html',
  styles:[`
    .glyphicon-star{
        color:orange;
    }
  `]
})
export class RatingComponent{
  // When component is instantiated,
  // it is bound to the property name
  @Input('rating-value') rating: number = 0;
  // Property is bounded using its original name
  @Input() numOfReviews: number = 0;
  onClick(ratingValue){
    this.rating = ratingValue;
  }
}

