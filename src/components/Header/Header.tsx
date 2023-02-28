import React from "react";
import UploadButton from "./UploadButton";
import SaveButton from "./SaveButton";
import RedoButton from "./RedoButton";
import UndoButton from "./UndoButton";
import ZoomControl from "./ZoomControl";
import useStore from "../../hooks/useStore";
import { useObserver } from "mobx-react";

const Header: React.FC = () => {
  const { UIStore } = useStore();
  return useObserver(() =>
    <header
      className={`header ${UIStore.isToolbarOpen ? "header_toolbar-open" : ""}`}
    >
      <div className="header__items">
        <div className="header__items-group">
          <div className="header__item">
            <UndoButton />
          </div>
          <div className="header__item">
            <RedoButton />
          </div>
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              window.location.href = "https://freeditor.wooshelf.in/";
            }}
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "#fff",
              borderRadius: 10
            }}
          >
            Home
          </button>

          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              window.location.href = "https://freevideo.wooshelf.in";
            }}
            style={{
              width: "100px",
              marginLeft: "20px",
              height: "30px",
              backgroundColor: "#fff",
              borderRadius: 10
            }}
          >
            Video
          </button>
        </div>
        <div className="header__items-group">
          <div className="header__item">
            <ZoomControl />
          </div>
        </div>
        <div className="header__items-group">
          <div className="header__item">
            <UploadButton />
          </div>
          <div className="header__item">
            <SaveButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
