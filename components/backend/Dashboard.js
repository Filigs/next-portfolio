// components\dashboard\Dashboard.js
import React, { useState, useEffect, useCallback } from "react";
import DynamicForm from "../DynamicForm";
import ItemCard from "../ItemCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import EditItemModal from "./EditItemModal";
import {
  getArticles,
  createArticle,
  updateArticleById as apiUpdateArticle,
  deleteArticleById as apiDeleteArticle,
} from "../../lib/api/articles";

import {
  getTags,
  createTag,
  updateTag as apiUpdateTag,
  deleteTag as apiDeleteTag,
} from "../../lib/api/tags";

import Sidebar from "./sidebar/sidebar";
import styles from "../../styles/Dashboard.module.css";

export default function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTab, setSelectedTab] = useState("articles");
  const [showForm, setShowForm] = useState(false);

  // Table form fields
  // Dashboard.js

  const postFields = [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "content",
      type: "richtext",
      label: "Content",
      required: true,
    },
  ];

  const projectFields = [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "Project Link",
    },
    {
      name: "image",
      type: "cloudinaryImage",
      label: "Project Image",
    },
    {
      name: "tags",
      type: "multiselect",
      label: "Tags",
    },
  ];

  const reviewFields = [
    {
      name: "content",
      type: "richtext",
      label: "Content",
      required: true,
    },
  ];

  const testimonialFields = [
    {
      name: "content",
      type: "richtext",
      label: "Content",
      required: true,
    },
  ];

  const userFields = [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      unique: true,
    },
  ];

  async function loadArticles() {
    try {
      const data = await getArticles();
      setArticles(data);
      return data;
    } catch (error) {
      console.error("Failed to load Articles:", error);
    }
  }

  const loadTags = useCallback(async () => {
    try {
      const data = await getTags();
      setTags(data);
      return { tag: data };
    } catch (error) {
      console.error("Failed to load tags:", error);
    }
  }, [setTags]);

  async function handleItemUpdate(updatedItem) {
    try {
      if (updatedItem.contentType === "article") {
        await handleArticleUpdate(updatedItem);
      }
    } catch (error) {
      console.error("Failed to update Article:", error);
    }

    try {
      if (updatedItem.contentType === "tag") {
        await handleTagUpdate(updatedItem);
      }
    } catch (error) {
      console.error("Failed to update tag:", error);
    }
  }

  async function handleArticleUpdate(updatedArticle) {
    try {
      const updated = await apiUpdateArticle(
        updatedArticle._id,
        updatedArticle
      );

      if (Array.isArray(articles)) {
        setArticles(
          articles.map((article) =>
            article._id === updated._id ? updated : article
          )
        );
      }
    } catch (error) {
      console.error("Failed to update article:", error);
    }
  }

  function handleTagUpdate(updatedTag) {
    if (Array.isArray(tags)) {
      setTags(
        tags.map((tag) => (tag._id === updatedTag._id ? updatedTag : tag))
      );
    }
  }

  async function deleteArticle(_id) {
    try {
      await apiDeleteArticle(_id);
      setArticles(articles.filter((article) => article._id !== _id));
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  }

  async function deleteTag(_id) {
    try {
      await apiDeleteTag(_id);
      setTags(tags.filter((tag) => tag._id !== _id));
    } catch (error) {
      console.error("Failed to delete tag:", error);
    }
  }

  useEffect(() => {
    loadArticles();
    loadTags();
  }, [loadTags]);
  return (
    <div className={styles.dashboard}>
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setShowForm={setShowForm}
        setSelectedItem={setSelectedItem}
      />

      <div className={styles.mainContent}>
        <div className={styles.mainContentInner}>
          {selectedTab === "articles" && (
            <>
              {showForm ? (
                <div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex items-center px-4 py-2 space-x-2 text-white rounded-md bg-primary"
                  >
                    <AiOutlineArrowLeft />
                    <span>Go Back</span>
                  </button>
                  <DynamicForm
                    fetchOptions={loadTags} // Pass tags to populate the tag select dropdown
                    fields={newsPostFields} // Form fields for the selected tab
                    action={{
                      create: createArticle,
                      update: apiUpdateArticle,
                    }} // Actions to perform on form submit
                    initialValues={selectedItem || {}}
                    onClose={() => setShowForm(false)}
                    onUpdate={handleItemUpdate} // Initial form values
                    onSubmit={(formData, isNew) => {
                      if (isNew) {
                        createArticle(formData).then(loadArticles);
                      } else {
                        apiUpdateArticle(formData._id, formData).then(
                          loadArticles
                        );
                      }
                      setShowForm(false);
                    }}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                  {Array.isArray(articles) &&
                    articles.map((article) => (
                      // In the Dashboard component
                      <ItemCard
                        key={`article-${article._id}`}
                        item={{
                          ...article,
                          contentType: "article",
                          description: article.content.slice(0, 100) + "...",
                        }}
                        onEdit={(item) => setSelectedItem(item)}
                        onDelete={deleteArticle}
                      />
                    ))}
                </div>
              )}
            </>
          )}

          {selectedTab === "tags" && (
            <>
              {showForm ? (
                <div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex items-center px-4 py-2 space-x-2 text-white rounded-md bg-primary"
                  >
                    <AiOutlineArrowLeft />
                    <span>Go Back</span>
                  </button>
                  <DynamicForm
                    fetchOptions={() => Promise.resolve(tags)}
                    fields={tagFields}
                    action={{
                      create: createTag,
                      update: apiUpdateTag,
                    }}
                    onUpdate={handleItemUpdate}
                    onClose={() => setShowForm(false)}
                    onSubmit={(formData, isNew) => {
                      if (isNew) {
                        createTag(formData).then(loadTags);
                      } else {
                        apiUpdateTag(formData._id, formData).then(loadTags);
                      }
                      setShowForm(false);
                    }}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                  {Array.isArray(tags) &&
                    tags.map((tag) => (
                      <ItemCard
                        key={`tag-${tag._id}`}
                        item={{
                          ...tag,
                          contentType: "tags",
                          description: tag.description,
                        }}
                        onEdit={(item) => setSelectedItem(item)}
                        onDelete={deleteTag}
                      />
                    ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {selectedItem && (
        <EditItemModal
          itemType={selectedItem.contentType}
          itemData={selectedItem}
          onClose={() => {
            setSelectedItem(null);
            setShowForm(false);
          }}
          onUpdate={handleItemUpdate}
          fields={
            selectedItem.contentType === "article" ? newsPostFields : tagFields
          }
          action={
            selectedItem.contentType === "article"
              ? { create: createArticle, update: apiUpdateArticle }
              : { create: createTag, update: apiUpdateTag }
          }
        />
      )}
    </div>
  );
}
