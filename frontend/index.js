 import {scrictMode} from"react";
 import ReactDom from"react-dom";

 import app from "./app";

 const rootElement=document.getElementsById("root");
 ReactDom.render(
<scrictMode>
    <app />
</scrictMode>
 );