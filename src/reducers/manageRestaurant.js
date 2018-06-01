import cuid from "cuid";
export const cuidFn = cuid;
// console.log("id", cuidFn);
export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        restaurants: [...state.restaurants, { text: action.text, id: cuidFn() }]
      };
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.id
        )
      };
    case "ADD_REVIEW":
      return {
        reviews: [
          ...state.reviews,
          {
            text: action.review.text,
            id: cuidFn(),
            restaurantId: action.review.restaurantId
          }
        ]
      };
    case "DELETE_REVIEW":
      return {
        reviews: state.reviews.filter(review => review.id !== action.id)
      };
    default:
      return state;
  }
}
