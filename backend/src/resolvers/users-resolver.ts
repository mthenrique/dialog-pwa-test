import { Arg, Query, Resolver } from 'type-graphql'

import { User } from '../dtos/models/user-model'

import data from '../db.json'

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async list(@Arg('keyword') keyword: string) {
    if (keyword) {
      const filteredData = data.filter((user) => {
        const regex = new RegExp(keyword.toLowerCase().split(' ').join('|'))
        return regex.test(user.name.toLowerCase())
      })

      return filteredData
    }
    return data
  }

  @Query(() => User)
  async user_by_id(@Arg('id') id: string) {
    const user = data.find(user => {
      return user._id === id;
    });
    return user
  }
}
