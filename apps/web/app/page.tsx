"use client"

import { useQuery } from "convex/react"
import { api } from "@workspace/backend/api"

export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1>app/web</h1>

        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  )
}
