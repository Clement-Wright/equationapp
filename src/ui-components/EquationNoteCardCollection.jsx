/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equation } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import EquationNoteCard from "./EquationNoteCard";
import { Collection } from "@aws-amplify/ui-react";
export default function EquationNoteCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Equation,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "EquationNoteCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <EquationNoteCard
          equation={item}
          margin="4px 4px 4px 4px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></EquationNoteCard>
      )}
    </Collection>
  );
}
