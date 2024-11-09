import { useQuery, useQueryClient } from "@tanstack/react-query"
import React, { ReactNode } from "react";
import { GenericListDefinition } from "./GenericListDefinition";
interface Key{}
interface GenericType{
  id: GenericId;
  title: ReactNode;
  body: string
}
function useGenericTypes(def: GenericListDefinition) {
  return useQuery({
    queryKey: [],
    queryFn: async (): Promise<Array<GenericType>> => {
      const response = await def.fetch()
      return await response.json()
    },
  })
}
type GenericId = React.Key

function Loader({
  setGenericTypeId,
  def1,
}: {
  setGenericTypeId: React.Dispatch<React.SetStateAction<GenericId>>
  def1: GenericListDefinition
}) {
  const queryClient = useQueryClient()
  //const { status, data, isFetching , isError, isPending} = useGenericTypes()
  const response = useGenericTypes(def1)
  const isError = response.isError;
  const isPending = response.status =='loading';
  const isFetching = response.isFetching;
  const data = response.data;

  return (
    <div>
      <h1>GenericTypes</h1>
      <div>
        {isPending ? (
          'Loading...'
        ) : isError ? (
          <span>Error: "error"</span>
        ) : (
          <>
            <div>
              {data?.map((genericType) => (
                <p key={genericType.id}>
                  <a
                    onClick={() => setGenericTypeId(genericType.id)}
                    href="#"
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['genericType', genericType.id])
                        ? {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        : {}
                    }
                  >
                    {genericType.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  )
}

const getGenericTypeById = async (id: GenericId, def: GenericListDefinition ): Promise<GenericType> => {
  const response = await def.fetch_id(id);
  return await response.json()
}

function useGenericType(genericTypeId: GenericId, def: GenericListDefinition) {
  return useQuery({
    queryKey: ['genericType', genericTypeId],
    queryFn: () => getGenericTypeById(genericTypeId,def),
    enabled: !!genericTypeId,
  })
}

export function GenericType({
  genericTypeId,
  setGenericTypeId,
  def,
}: {
  genericTypeId: GenericId,
  setGenericTypeId: React.Dispatch<React.SetStateAction<GenericId>>,
  def: GenericListDefinition
}) {
  const { status, data, error, isFetching } = useGenericType(genericTypeId,def)

  return (
    <div>
      <div>
        <a onClick={() => setGenericTypeId(-1)} href="#">
          Back
        </a>
      </div>
      {!genericTypeId ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: error</span>
      ) : (
        <>
          <h1>{data?.title}</h1>
          <div>
            <p>{data?.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  )
}
