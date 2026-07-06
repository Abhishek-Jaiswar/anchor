import { mutation, query } from "./_generated/server"

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("user").collect()
    return users
  },
})

export const addUsers = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (identity == null) {
      throw new Error("Not authenticated")
    }
    const userId = await ctx.db.insert("user", {
      name: "Karan kumar",
    })

    return userId
  },
})


// export const getForCurrentUser = query({
//   args: {},
//   handler: async (ctx) => {
//     const identity = await ctx.auth.getUserIdentity()
//     if (identity === null) {
//       throw new Error("Not authenticated")
//     }
//     return await ctx.db
//       .query("messages")
//       .filter((q) => q.eq(q.field("author"), identity.email))
//       .collect()
//   },
// })
