"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createArticle } from "@/store/article.service";

export const formSchema = z.object({
  title: z.string().min(3).max(60),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  imageUrl: z.string().url(),
  content: z.string().optional(),
});

const StartupForm = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      imageUrl: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      values.content = content;
      await createArticle(values);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="startup-form_input"
                  placeholder="Título do artigo"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="startup-form_textarea"
                  placeholder="Startup Description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cetegoria</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="startup-form_input"
                  placeholder="Startup Category (Tech, Health, Education...)"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link da imagem</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="startup-form_input"
                  placeholder="Startup Image URL"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({}) => (
            <div data-color-mode="light">
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <MDEditor
                    value={content}
                    onChange={(value) => setContent(value as string)}
                    id="content"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                      placeholder:
                        "Briefly describe your idea and what problem it solves",
                    }}
                    previewOptions={{
                      disallowedElements: ["style"],
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <Button
          type="submit"
          className="startup-form_btn text-white"
          disabled={loading}
        >
          {loading ? "Criando artigo..." : "Criar artigo"}
          <Send className="size-6 ml-2" />
        </Button>
      </form>
    </Form>
  );
};

export default StartupForm;
