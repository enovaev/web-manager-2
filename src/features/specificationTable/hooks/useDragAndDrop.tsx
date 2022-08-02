import { DragEvent, useState } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { changeSpecEntity, dropAction } from '../actions';

const DRAGGED = 'dragged';

export const useDragAndDrop = (
  id: number,
  dragged: boolean,
  isGroupItem: boolean = false
) => {
  const [draggable, setDraggable] = useState(false);
  const dispatch = useDispatch();

  const onDragStart = () => {
    setTimeout(() => {
      dispatch(changeSpecEntity(id, DRAGGED, true));
    }, 100);
  };

  const onDragEnd = () => {
    setDraggable(false);
    dispatch(changeSpecEntity(id, DRAGGED, false));
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (!dragged && !draggable) {
      dispatch(dropAction(id, isGroupItem));
    }
  };

  const onDraggableHandler = () => setDraggable(true);

  return {
    draggable,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDraggableHandler
  };
};
