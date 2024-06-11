import React from 'react';

interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
  linkbtn: string;
}

export default function SectionLarge({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
  linkbtn,
}: Props){

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    },
  } as const;

  return (
    <>
      <section className="">
        <div className="relative sm:py-0" style={styles.pageHeader}>
          {/* Fondo oscurecido */}
          <span className="absolute inset-0 bg-black bg-opacity-60"></span>

          {/* Contenedor de contenido explícitamente sobre el span */}
          <div className="absolute inset-0 flex justify-center items-center flex-col">
            <div className="container mx-auto px-4">
              <div className="flex justify-center items-center flex-col h-screen">
                <div className="w-full sm:w-9/12 lg:w-8/12 text-center mx-auto bg-transparent">
                  <h1 className="text-white text-3xl mb-4 z-30">{title}</h1>
                  <p className="text-white text-lg leading-relaxed mb-6 sm:mb-4 z-30">{full_description}</p>
                  {linkbtn === "" ? null : (
                    <button
                      className="bg-white text-gray-800 font-semibold py-2 px-4 text-lg rounded z-30"
                      type="button"
                      onClick={() => {
                        window.location.href = linkbtn;
                      }}
                    >
                      Productos
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
