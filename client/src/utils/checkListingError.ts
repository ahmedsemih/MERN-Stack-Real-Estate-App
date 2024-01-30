import { FieldErrors } from "react-hook-form";
import {
  BaseInputs,
  DetailsInputs,
  LocationInputs,
} from "@/pages/CreateListing";

export default (
  step: number,
  values: BaseInputs & LocationInputs & DetailsInputs,
  errors: FieldErrors<BaseInputs & LocationInputs & DetailsInputs>
) => {
  switch (step) {
    case 0:
      return errors?.category ||
        errors?.type ||
        errors?.detailedType ||
        !values.category ||
        !values.type ||
        !values.detailedType
        ? true
        : false;
    case 1:
      return errors?.province ||
        errors?.district ||
        errors?.address ||
        !values.province ||
        !values.district ||
        !values.address
        ? true
        : false;
    case 2:
      return errors?.images ||
        errors?.title ||
        errors?.description ||
        errors?.price ||
        errors?.size ||
        (values.images && values.images.length === 0) ||
        !values.title ||
        !values.description ||
        !values.price ||
        !values.size
        ? true
        : false;
    case 3:
      return errors?.buildingYear ||
        errors?.roomAndSaloon ||
        errors?.floor ||
        errors?.locatedFloor ||
        errors?.heatingType ||
        errors?.bathroom ||
        !values.buildingYear ||
        !values.roomAndSaloon ||
        !values.floor ||
        !values.locatedFloor ||
        !values.heatingType ||
        !values.bathroom
        ? true
        : false;
    default:
      return false;
  }
};
