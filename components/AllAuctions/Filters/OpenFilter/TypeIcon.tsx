import { TypeType } from "@/types/store";
import {
  CheckBadgeIcon,
  GlobeAmericasIcon,
  HandRaisedIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

interface TypeIconProps {
  type: TypeType;
  className: string;
  [propName: string]: any;
}

const TypeIcon = ({ type, className, ...props }: TypeIconProps) => {
  switch (type) {
    case TypeType.All:
      return <GlobeAmericasIcon className={className} {...props} />;
    case TypeType.Epic:
      return <CheckBadgeIcon className={className} {...props} />;
    case TypeType.Rare:
      return <SparklesIcon className={className} {...props} />;
    case TypeType.Uncommon:
      return <HandRaisedIcon className={className} {...props} />;
    case TypeType.Legendary:
      return <StarIcon className={className} {...props} />;
    default:
      return null;
  }
};
export default TypeIcon;
