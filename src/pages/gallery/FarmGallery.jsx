import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import {
  Eyebrow,
  Invitation,
  PageHero,
  Photo,
} from "../../components/Editorial";

const media = {
  photos: [
    {
      title: "Land preparation",
      description: "Preparing the land for planting crops.",
      url: "/images/land_preparations.jpg",
    },
  ],
  videos: [
    {
      title: "Planting / A field journal",
      description: "A closer look at planting on the farm.",
      url: "/videos/planting_pictures.mp4",
    },
    {
      title: "Planting / In motion",
      description: "Our planting operations, in motion.",
      url: "/videos/planting.mp4",
    },
  ],
};
export default function FarmGallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      opener.current?.focus();
    };
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
  };
  const onTabKey = (event) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const next =
        event.key === "Home"
          ? "photos"
          : event.key === "End"
            ? "videos"
            : activeTab === "photos"
              ? "videos"
              : "photos";
      setActiveTab(next);
      document.getElementById(`tab-${next}`)?.focus();
    }
  };
  return (
    <>
      <PageHero
        label="Life on the farm"
        title="A little closer"
        accent="to the source."
        description="Real work. Growing possibilities. Explore our agricultural operations through photos and videos from our farm."
        image="/images/land_preparations.jpg"
        imageAlt="Land preparation at the EE Agro farm"
        note="FIELD NOTES / GWARIA WIZI, KWARA"
      />
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-toolbar">
            <div>
              <Eyebrow>The field journal</Eyebrow>
              <h2>
                See the story <em>growing.</em>
              </h2>
            </div>
            <div
              className="gallery-tabs"
              role="tablist"
              aria-label="Farm media"
            >
              {["photos", "videos"].map((type) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === type}
                  aria-controls="gallery-panel"
                  id={`tab-${type}`}
                  tabIndex={activeTab === type ? 0 : -1}
                  key={type}
                  onKeyDown={onTabKey}
                  onClick={() => setActiveTab(type)}
                >
                  {type === "photos" ? "Photography" : "Films"}
                  <span>0{media[type].length}</span>
                </button>
              ))}
            </div>
          </div>
          <div
            id="gallery-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            className={`gallery-grid gallery-${activeTab}`}
          >
            {media[activeTab].map((item, i) => (
              <button
                className="gallery-item"
                type="button"
                key={item.url}
                onClick={(event) => {
                  opener.current = event.currentTarget;
                  setSelected({ ...item, type: activeTab });
                }}
                aria-label={`Open ${item.title}`}
              >
                <div className="gallery-media">
                  <Photo
                    src="/images/land_preparations.jpg"
                    alt={
                      activeTab === "photos"
                        ? "Agricultural machinery preparing land for planting"
                        : ""
                    }
                    sizes="(max-width: 700px) 100vw, 60vw"
                  />
                  {activeTab === "videos" ? (
                    <span className="play-button">
                      <Play fill="currentColor" size={24} />
                    </span>
                  ) : (
                    <span className="gallery-expand">
                      <ArrowUpRight />
                    </span>
                  )}
                </div>
                <div className="gallery-caption">
                  <span>
                    0{i + 1} / {activeTab === "photos" ? "PHOTOGRAPHY" : "FILM"}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Invitation
        title="Come and see"
        accent="what’s growing."
        description="Schedule a tour to see our operations firsthand and learn about our sustainable farming practices."
        to="/contact?subject=Farm%20visit"
        action="Schedule a farm visit"
      />
      {selected && (
        <dialog
          ref={dialog}
          className="media-dialog"
          aria-label={selected.title}
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="media-dialog-inner">
            <button
              autoFocus
              type="button"
              className="dialog-close"
              onClick={close}
              aria-label="Close media"
            >
              <X />
            </button>
            {selected.type === "photos" ? (
              <img src={selected.url} alt={selected.title} />
            ) : (
              <video controls autoPlay preload="metadata" src={selected.url}>
                Your browser does not support video playback.
              </video>
            )}
            <div>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
