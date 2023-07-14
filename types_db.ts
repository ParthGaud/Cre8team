export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          about: string | null
          email: string | null
          first_name: string | null
          id: string
          industry: string | null
          last_name: string | null
          linkedin: string | null
          location: string | null
          phone_number: number | null
          website: string | null
        }
        Insert: {
          about?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          industry?: string | null
          last_name?: string | null
          linkedin?: string | null
          location?: string | null
          phone_number?: number | null
          website?: string | null
        }
        Update: {
          about?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          industry?: string | null
          last_name?: string | null
          linkedin?: string | null
          location?: string | null
          phone_number?: number | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
