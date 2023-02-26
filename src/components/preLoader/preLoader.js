import React from "react";
import ReactLoading from "react-loading";
import '../../App.css'
import preloader from '../../assets/images/preloader.gif'

export default function Loading() {
  return (
    <div class="preloader"> <img class="loader" src={preloader} alt="Image"/>
    <ul class="text-rotater">
    <li>Hangin there</li>
    <li>Still loading</li>
    <li>Almost done</li>
    </ul>
    </div>
  )
}