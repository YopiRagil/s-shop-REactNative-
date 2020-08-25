import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const CreateStar = (props) => {
  let value = ~~props.star;
  let stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<Icon key={i} name="md-star" color="gold" size={20} />);
  }
  if (props.star % 1 === 0) {
    for (let i = 0; i < 5 - value; i++) {
      stars.push(
        <Icon key={value + i} name="md-star-outline" color="gold" size={20} />
      );
    }
  } else {
    stars.push(<Icon key={value} name="md-star-half" color="gold" size={20} />);
    for (let i = 0; i < 5 - 1 - value; i++) {
      stars.push(
        <Icon
          key={value + 1 + i}
          name="md-star-outline"
          color="gold"
          size={20}
        />
      );
    }
  }
  return stars;
};

export default CreateStar;
