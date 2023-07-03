import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import SideBar from "../SideBar";
import CategoryModal from "../../../Components/Modals/CategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction, getAllCategoriesAction } from "../../../Redux/Actions/CategoriesActions";
import Loader from "../../../Components/Notifications/Loader";
import { Empty } from "../../../Components/Notifications/Empty";
import { toast } from "react-hot-toast";
import { DELETE_CATEGORY_RESET } from "../../../Redux/Constants/CategoriesConstants";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector((state) => state.categoryGetAll);
  const { isSuccess, isError } = useSelector((state) => state.categoryDelete);
  const adminDeletecategory = (id) => {
    if (window.confirm('Do you want to delete this category?')) {
      dispatch(deleteCategoryAction(id));
    }
  }

  const OnEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    if (isError) {
      toast.error(isError)
      dispatch({
        type: DELETE_CATEGORY_RESET,
      });
    }
    if (isSuccess) {
      dispatch({
        type: DELETE_CATEGORY_RESET,
      });
    }

    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen, dispatch, isSuccess, isError]);

  return (
    <SideBar>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-Green border border-subMain text-white py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        {
          isLoading ? (
            <Loader />
          ) : categories?.length > 0 ? (
            <Table2
              data={categories}
              users={false}
              OnEditFunction={OnEditFunction}
              onDeleteFunction={adminDeletecategory}
            />
          ) : (
            <Empty message="You have no categories yet!" />
          )}
      </div>
    </SideBar>
  );
}

export default Categories;