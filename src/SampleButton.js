import './SampleButton.css';
import React from 'react';

function SampleButton() {

  // クリックイベントで実行する処理
  function handleClick(e) {
    const samplebutton = document.getElementById('samplebutton');

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
    <div onClick={handleClick} class="sampleButton-ok" id="samplebutton">
      OK
    </div >
  );
}

export default SampleButton;//他の関数から呼び出せるように
