import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Article, User } from "@prisma/client";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { ImageOff, User2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AvatarFallback } from "./ui/avatar";

const ArticleCard = ({
  item,
}: {
  item: Partial<Article & { user: Partial<User> }>;
}) => {
  return (
    <Card className="group overflow-hidden shadow-lg flex flex-col">
      <div className="flex flex-col flex-grow">
        {item.imageUrl ? (
          <Image
            src={item?.imageUrl}
            alt="Card img"
            className="object-cover object-center w-full h-48"
            height={192}
            width={600}
          />
        ) : (
          <div className="w-full h-48 border-b flex items-center justify-center">
            <ImageOff className="size-10 stroke-slate-800" />
          </div>
        )}
        <CardHeader className="p-4 w-full">
          <div className="flex justify-between items-start w-full">
            <Link href={`article/${item.id}`}>
              <h2 className="text-xl font-bold line-clamp-2 break-all">
                {item.title}
              </h2>
            </Link>
            <Badge variant="secondary" className="ml-2 line-clamp-1 break-all ">
              {item.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 break-all">
            {item.description}
          </p>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <Avatar className="size-6">
              <AvatarImage
                src={item.user?.imageUrl!}
                className="rounded-full"
              />
              <AvatarFallback>
                <User2 className="size-5" />
              </AvatarFallback>
            </Avatar>
            <span>
              {item.user?.name} {item.user?.lastName}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link href={`article/${item.id}`} className="w-full">
            <Button className="w-full">Ver Detalhes</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ArticleCard;
