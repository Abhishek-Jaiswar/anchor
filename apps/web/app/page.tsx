"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/api"
import { Input } from "@workspace/ui/components/input"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { mutation } from "@workspace/backend/server"

export default function Page() {
  const [name, setName] = useState("")
  const users = useQuery(api.users.getMany)

  const add = useMutation(api.users.addUsers)

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1>app/web</h1>

        {JSON.stringify(users, null, 2)}
      </div>

      <div>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />

        <Button onClick={() => add()}>create User</Button>
      </div>
    </div>
  )
}
