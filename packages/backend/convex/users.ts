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
    const userId = await ctx.db.insert("user", {
      name: "Karan kumar",
    })

    return userId
  },
})
