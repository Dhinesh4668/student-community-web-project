/* eslint-disable no-unused-vars */
import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}
export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  let myMeeting = async (element) => {

 const appID = 32858190;
 const serverSecret = "7951273ed27b49ad6894edb964a2a3c6";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


 const zp = ZegoUIKitPrebuilt.create(kitToken);

 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };

  return (

    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100%', height: '97.9vh',display: 'flex', justifyItems: 'center' }}
    ></div>
  );
}