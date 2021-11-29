// @ts-ignore
import React from "react";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";

import Card from "./Card";

interface Image {
  url: string;
  description: string;
}

const App: React.FC = () => {
  const [images, setImages] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    axios
      .get<Image[]>(
        "https://api.unsplash.com/photos/random?client_id=fypjUQmwXWB1hGFlNcT58Ma-sy69u5xxXwXyasVNf4I&count=20"
      )
      .then((response) => {
        setImages(response.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <h1 className="title">Photo Gallery</h1>
        </header>
        <SRLWrapper>
          <div className="content">
            {images &&
              images.map((image, index) => (
                <Card
                  key={index}
                  url={image.urls.regular}
                  username={image.user.username}
                />
              ))}
          </div>
        </SRLWrapper>
      </div>
    </>
  );
};

export default App;
