import React from "react";
// import { useRouter } from "next/router";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { GoComment } from "react-icons/go";

export default function PopUpArticle(props) {
  // const router = useRouter();
  const {
    postTitle,
    postBody,
    closeButton,
    postAuthor,
    authorPosition,
    authorCompany,
  } = props;
  return (
    <div className="z-50 border-0 bg-grey-700 bg-opacity-80 backdrop-blur-sm h-full w-screen px-0 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <Card
        style={{ maxWidth: 800 }}
        className="p-2 rounded-xl fixed top-1/2 -translate-y-1/2 mx-2 lg:mx-auto border-0 border-black"
      >
        <div className="border-b-2 border-grey-200 w-full rounded-t-xl px-6 py-4">
          <h1 className="border-0 font-bold text-sm text-grey-400">
            {postAuthor}
          </h1>
          <h1 className="border-0 line-clamp-1 text-xs text-grey-400">
            {authorPosition} | {authorCompany}
          </h1>
        </div>
        <div className="border-0 border-red-200 absolute right-2 top-2 h-16">
          {closeButton}
        </div>
        <CardBody className="gap-3 flex flex-col border-0 h-80 sm:h-full overflow-scroll">
          <h1 className="font-bold text-lg sm:text-2xl text-green-200">
            {postTitle}
          </h1>
          <div className="sm:text-lg">{postBody}</div>
        </CardBody>
        <CardFooter divider className="flex flex-col h-18">
          <div className="border-0 self-end flex items-center">
            <div className="font-semibold">Comments</div>
            <GoComment size={24} className="ml-3 w-full text-black -mb-2" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
