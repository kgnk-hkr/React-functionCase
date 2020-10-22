import './SampleButton.css';
import React from 'react';

function SampleButton(props) {

  // クリックイベントで実行する処理
  function handleClick(e) {
    const samplebutton = document.getElementById(props.id);

    // sampleButton-ngのクラスが適用されているかで動作を分ける
    if (!samplebutton.classList.contains('sampleButton-ng')) {
      //クラスの追加
      samplebutton.classList.add('sampleButton-ng');
      //テキストの書き換え
      samplebutton.textContent = "NG";
    } else {
      //クラスの削除
      samplebutton.classList.remove('sampleButton-ng');
      //テキストの書き換え
      samplebutton.textContent = "OK";
    }
  }

  return (
    // idは上位から受け取ったものを利用する
    <div onClick={handleClick} className="sampleButton-ok" id={props.id}>
      OK
    </div >
  );
}

export default SampleButton;
