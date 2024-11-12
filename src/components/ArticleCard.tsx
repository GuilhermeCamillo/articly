import React from "react";
import { Card } from "./ui/card";
import { Article, User } from "@prisma/client";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { User2 } from "lucide-react";

const ArticleCard = ({
  item,
}: {
  item: Partial<Article & { user: Partial<User> }>;
}) => {
  return (
    <Card className="shadow-sm rounded-sm">
      {item.imageUrl ? (
        <Image
          src={item?.imageUrl}
          alt="Card img"
          className="object-cover object-center w-full h-48"
          height={192}
          width={600}
        />
      ) : (
        <Image
          src="https://img.freepik.com/vetores-premium/icone-moderno-de-analise-de-dados-em-estilo-simples_203633-10901.jpg?w=740"
          alt="Empty Image"
          className="object-cover object-center w-full h-48 border"
          height={192}
          width={600}
        />
      )}
      <div className="flex flex-grow">
        <div className="triangle"></div>
        <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 w-full">
          <div>
            <a
              href="#"
              className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
            >
              {item.category}
            </a>
            <a
              href="#"
              className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
            >
              {item.title}
            </a>
            <p className="mb-4">{item.description}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full"
              />
            </Avatar>
            <p className="text-sm font-medium">
              {item.user?.name} {item.user?.lastName}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
