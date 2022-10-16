import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const ClientCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="grid gap-8">
      {prismicH.isFilled.image(image) && (
        <div className="bg-gray-100">
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.link)}
            wrap={({ children }) => (
              <PrismicLink field={item.link} tabIndex="-1">
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage field={image} layout="responsive" />
          </ConditionalWrap>
        </div>
      )}
    </li>
  );
};

const ClientCards = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {slice.items.map((item) => (
            <ClientCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ClientCards;
