export const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  UPDATE: "update",
};
export default function stickiesReducer(stickies, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      if (
        action.payload.title.trim() != "" &&
        action.payload.description.trim() != ""
      ) {
        return [...stickies, action.payload];
      } else {
        return stickies;
      }
    }
    case ACTIONS.DELETE: {
      return stickies.filter((item) => item.id != action.payload);
    }
    case ACTIONS.UPDATE: {
      const updatedStickes = stickies.map((sticky) => {
        if (sticky.id === action.payload.id) {
          return {
            ...sticky,
            title: action.payload.title,
            description: action.payload.description,
            bg: action.payload.bg,
          }; // copy the user and update the age
        }
        return sticky; // return as is
      });
      return updatedStickes;
    }
    default: {
      return stickies;
    }
  }
}
