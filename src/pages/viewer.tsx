import React, { useEffect, useRef } from 'react';
import { createSession, createViewport, MaterialStandardData } from '@shapediver/viewer';
import { InteractionEngine, SelectManager, InteractionData } from '@shapediver/viewer.features.interaction';

const Viewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const initShapeDiver = async () => {
      try {
        // Create the viewport and attach it to the canvas
        const viewport = await createViewport({
          canvas: canvasRef.current as HTMLCanvasElement,
          id: 'BoothDesign',
        });

        // Create the session
        const session = await createSession({
          ticket: 'ab12ed75ba62172c31a45efa5b1dcb9d9955b4ba3a1e412c8220cf15de63927f7ebe6954d11b275e02028a5719dc828c742e2a31d5a01269770284196a6f754e097577c06a6f065bdabbcbafccc523a521a351bd13eac6de3ae02f9b636fca64d6eaf7e4673636-ab167db2d06284a0a1f5a844a4c268cf-7516be37cb2d968a0b3c545baf3ae51e',
          modelViewUrl: 'https://sdeuc1.eu-central-1.shapediver.com',
          id: 'BoothDesign',
        });

        viewport.show = true;

      } catch (error) {
        console.error('Error initializing ShapeDiver:', error);
      }
    };

    if (canvasRef.current) {
      initShapeDiver();
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default Viewer;
