import React from "react";

const MetaPixel = () => {
  return (
    <>
      <script
        id="facebook-pixel-script"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1769033777221546');
fbq('track', 'PageView');

          `,
        }}
      />
      <noscript
        id="facebook-pixel-image"
        dangerouslySetInnerHTML={{
          __html: `
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1769033777221546&ev=PageView&noscript=1" />
          `,
        }}
      />
    </>
  );
};

export default MetaPixel;
