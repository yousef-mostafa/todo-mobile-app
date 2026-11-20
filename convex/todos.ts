import { ConvexError, v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const newTodoId = await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });
    return newTodoId;
  },
});

// export const getSelected = (id) =>
//   query({
//     handler: async (ctx) => {
//       const selectedTodo = await ctx.db.get("todos", id);
//       return selectedTodo;
//     },
//   });

export const ToggleTodoIsComplete = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const selectedTodo = await ctx.db.get(args.id);
    if (!selectedTodo) throw new ConvexError("todo item not found");

    await ctx.db.patch(args.id, {
      isCompleted: !selectedTodo.isCompleted,
    });
  },
});

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateTodo = mutation({
  args: { id: v.id("todos"), text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      text: args.text,
    });
  },
});

export const resetApp = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();

    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }

    return { deletedCount: todos.length };
  },
});
