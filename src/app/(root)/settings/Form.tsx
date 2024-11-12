"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsForm({
  initialName = "",
  initialLastName = "",
  initialImage = "/placeholder.svg?height=128&width=128",
}: {
  initialName?: string;
  initialLastName?: string;
  initialImage?: string;
}) {
  const [name, setName] = useState(initialName);
  const [lastName, setLastName] = useState(initialLastName);
  const [image, setImage] = useState(initialImage);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", { name, lastName, image });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-white font-bold">Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white font-bold">
              Nome
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border-[2.5px] border-slate-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white font-bold">
              Sobrenome
            </Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="border-[2.5px] border-slate-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image" className="text-white font-bold">
              Imagem de perfil
            </Label>
            <div className="flex items-center space-x-4">
              <Avatar className="h-32 w-32 border-[2.5px] border-slate-500">
                <AvatarImage src={image} alt="Profile" />
                <AvatarFallback>Imagem</AvatarFallback>
              </Avatar>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border-[2.5px] border-slate-500"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-slate-500 border-[2.5px] border-slate-500"
          >
            Salvar alterações
          </Button>
        </form>
      </CardContent>
    </div>
  );
}
