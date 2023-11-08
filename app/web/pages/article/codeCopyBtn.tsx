import {CopyOutlined} from "@ant-design/icons";
import React from "react";
import './code.css'


const CodeCopyButton = ({children}) => {
  const [copyOk, setCopyOk] = React.useState(false);

  const iconColor = copyOk ? '#0af20a' : '#ddd';

  const handleClick = () => {
    navigator.clipboard.writeText(children[0].props.children[0]);
    console.log(children)

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  }

  return (
    <div className="code-copy-btn">
      <CopyOutlined onClick={handleClick} style={{color: iconColor}}/>
    </div>
  )
}

export default CodeCopyButton;
