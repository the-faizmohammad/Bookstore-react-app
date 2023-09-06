function RemoveBookButton({ itemId }) {
    const dispatch = useDispatch();
  
    const handleRemoveBook = () => {
      dispatch(removeBook(itemId));
    };
  
    return (
      <button onClick={handleRemoveBook}>Remove Book</button>
    );
  }