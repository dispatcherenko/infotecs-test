import Input from "@shared/UI/Input.jsx";
import Button from "@shared/UI/Button.jsx";
import Select from "@shared/UI/Select";
import { HandySvg } from "handy-svg";
import sortAsc from "@shared/images/sort-asc.svg";
import sortDesc from "@shared/images/sort-desc.svg";

import "./Filters.scss";

const Filters = (props) => {
  const changeOrder = () => {
    props.setSort((prev) => {
      if (prev) {
        if (prev.order === "asc") {
          return { sortBy: prev.sortBy, order: "desc" };
        } else if (prev.order === "desc") {
          return { sortBy: prev.sortBy, order: "asc" };
        }
      }
      return { sortBy: "none", order: "asc" };
    });
  };

  const changeSort = (e) => {
    const selectedSort = e.target.value;
    props.setSort((prev) => {
      return { sortBy: selectedSort, order: prev.order };
    });
  };

  return (
    <div className="filters">
      <Input
        className="filters__search"
        type="text"
        placeholder="Search..."
        value={props.searchQuery}
        onChange={props.handleSearch}
      />

      <span className="filters__sort">
        <Button className="filters__switch" onClick={changeOrder}>
          {props.sort.order === "asc" ? (
            <HandySvg className="filters__img" src={sortAsc} />
          ) : (
            <HandySvg className="filters__img" src={sortDesc} />
          )}
        </Button>
        <Select className="filters__select" onChange={changeSort}>
          <option key="0" value="">
            Sort by...
          </option>
          <option key="1" value="firstName">
            First Name
          </option>
          <option key="2" value="lastName">
            Last Name
          </option>
          <option key="3" value="maidenName">
            Maiden Name
          </option>
          <option key="4" value="age">
            Age
          </option>
          <option key="5" value="gender">
            Gender
          </option>
          <option key="6" value="city">
            City
          </option>
          <option key="7" value="address">
            Address
          </option>
        </Select>
      </span>
    </div>
  );
};

export default Filters;
