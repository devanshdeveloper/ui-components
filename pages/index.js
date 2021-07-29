import Ui from "../components/other/Ui";
import btn from "../components/ui/buttons/button.module.scss";
import Modal from "../components/ui/modal/Modal";
import Head from "next/head";
import { useState } from "react";
import Popover from "../components/ui/popover/Popover";

function HomePage() {
  const [toggleModal, setToggleModal] = useState(false);
  const [togglePopover, setTogglePopover] = useState(false);

  return (
    <>
      <Head>
        <title>UI Components | devansh.developer</title>
      </Head>
      <div className="container">
        <Ui>
          <button className={btn.btnSm} onClick={() => setToggleModal(true)}>
            Modal
          </button>
        </Ui>
        <Ui>
          <button className={btn.btnMd} onClick={() => setTogglePopover(true)}>
            Alert
          </button>
        </Ui>
        <Ui>
          <button className={btn.btnLg}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnSecSm}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnSecMd}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnSecLg}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnSubSm}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnSubMd}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnSubLg}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnTextSm}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnTextMd}>Button</button>
        </Ui>
        <Ui>
          <button className={btn.btnTextLg}>Button</button>
        </Ui>
      </div>
      {toggleModal ? (
        <Modal
          title={"Welcome to Productivefy"}
          body={"Explore our Freatures"}
          closeEvent={() => setToggleModal(false)}
        ></Modal>
      ) : null}
      {togglePopover ? (
        <Popover
          popBody={"got success"}
          theme="success" // "error" or let it undefined for general theme
          closeEvent={() => setTogglePopover(false)}
        ></Popover>
      ) : null}
    </>
  );
}
export default HomePage;
