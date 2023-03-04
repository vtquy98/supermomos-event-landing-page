import React, { Suspense } from "react";
import { useModal } from "@/components/Modal";
import Image from "next/image";
import { Image as ImageLogo } from "@/images";

type BannerListProps = {
  selected?: string;
  onConfirm: (imgUrl: string) => void;
  onClose: () => void;
};

const BannerListModal = ({ selected, onConfirm, onClose }: BannerListProps) => {
  const [isSelecting, setIsSelecting] = React.useState<string>(selected || "");

  //random for me 10 mockup banners from unsplash
  const banners = [
    "https://images.unsplash.com/photo-1677611067015-4705eabe883b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677690489325-e6a4d2594d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677607164790-d3928528daf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677616842844-cb73475a0f7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677665248615-edb14db3369d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677526523517-d40d871c1191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677652704119-1497d836c396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1677530248448-51ac67bab738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1676883343789-277646224a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ];

  //Links below doesn't work!
  // const banners = [
  //   "https://supermomos-app-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
  //   "https://supermomos-appresources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
  //   "https://supermomosapp-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
  //   "https://supermomos-app-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
  //   "https://supermomos-appresources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
  //   "https://supermomosapp-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
  //   "https://supermomos-app-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
  //   "https://supermomos-appresources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
  //   "https://supermomosapp-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
  //   "https://supermomos-app-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
  // ];

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">Choose a banner</h5>
      </div>

      <div className="modal-body text-center">
        <div className="d-flex justify-content-center flex-wrap gap-2">
          {banners.map((image, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <div
                onClick={() => setIsSelecting(image)}
                className={`banner-selection ${
                  isSelecting === image ? "banner-selected" : ""
                }`}
              >
                <Image
                  src={image}
                  width={100}
                  height={120}
                  alt={`banner-${index}`}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
      <div className="modal-footer border-0">
        <button
          type="button"
          className="btn btn-outline"
          data-bs-dismiss="modal"
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="button"
          className="text-purple bg-yellow border-0 p-2 px-4 rounded-2"
          onClick={() => {
            onConfirm(isSelecting);
            onClose();
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

type Props = {
  value?: string;
  onChange: (poster: string) => void;
  error?: string;
};

const BannerSelection = ({ value, onChange, error }: Props) => {
  const { setModal, unSetModal } = useModal();
  return (
    <>
      <div
        className="banner-wrapper"
        style={{ backgroundImage: value ? `url(${value})` : "" }}
      >
        <div className="btn-wrapper">
          <button
            type="button"
            className="open-banner-btn"
            onClick={() =>
              setModal &&
              setModal(
                <BannerListModal
                  data-size="lg"
                  selected={value}
                  onConfirm={(img) => onChange(img)}
                  onClose={() => unSetModal && unSetModal()}
                />
              )
            }
          >
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Image width={24} height={24} alt="ico-date" src={ImageLogo} />
              </div>
              <div className="flex-grow-1 my-auto ms-3">Add a banner</div>
            </div>
          </button>
        </div>
      </div>
      {error && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      )}
    </>
  );
};

export default BannerSelection;
