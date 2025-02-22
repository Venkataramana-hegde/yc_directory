import { UserIcon } from "lucide-react";


// define author schema
//Debugging schema
// Another empty commit
//Another empty commit
export const author = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});
