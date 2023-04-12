const dummyComments = [
  {
    postid: 1,
    parentid: 0,
    user: "sahil",
    body: "this is post1 1st parent comment",
    child: [],
  },
  {
    postid: 2,
    parentid: 0,
    user: "sahil",
    body: "this is post 2 parent comment",
    child: [],
  },
  {
    postid: 1,
    parentid: 0,
    user: "sagar",
    body: "this is  post1 2nd  parent comment",
    child: [
      {
        postid: 1,
        parentid: 0,
        user: "sahil",
        body: "this is 1st child comment",
        child: [],
      },
    ],
  },

  {
    postid: 1,
    parentid: 0,
    user: "Anushank",
    body: "this is 3rd parent comment",
    child: [
      {
        postid: 1,
        parentid: 0,
        user: "sagar",
        body: "this is ist childe comment",
        child: [],
      },

      {
        postid: 1,
        parentid: 0,
        user: "sanyam",
        body: "this is 2nd childe comment",
        child: [
          {
            postid: 1,
            parentid: 0,
            user: "sahil",
            body: "child of 2nd child",
            child: [],
          },
        ],
      },
    ],
  },
];
export default dummyComments;
