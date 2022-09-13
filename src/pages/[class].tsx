import { GetServerSideProps } from 'next'
import React, { useEffect } from 'react'
import HederClassWithoutMaterial from '../components/molecules/header-class-without-material'
import { ContentType } from '../interfaces'
import { apiSDK, gambiarra } from '../services/api-sdk'

type ClassProps = {
  content: ContentType;
}

function Class({ content }: ClassProps) {
  useEffect(() => {
      (async () => {
        try {
          const data = await apiSDK.createStudentHistory(content.id, gambiarra.studentId)
          console.log(data)

        } catch (error) {
          console.log(error)
        }
      })()
  }, [content.id])

  return (
    <div>
      <HederClassWithoutMaterial content={content}/>
    </div>
  )
}

export default Class

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  const { class: title } = params;
  const { contentId } = query;
  const data = await apiSDK.getOnePlaylist(title as string)
  var content: ContentType
  if (data) {
    content = data.contents.find(data => data.content.id === contentId).content
  }

  return {
    props: {
      content: content || {},
    },
  }
}
