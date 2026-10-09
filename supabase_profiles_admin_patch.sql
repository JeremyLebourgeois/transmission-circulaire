-- Permettre aux administrateurs de voir tous les profils (pour la sélection des collaborateurs)
CREATE POLICY "Les admins peuvent voir tous les profils" 
ON profiles 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_roles.id = auth.uid() 
    AND user_roles.role IN ('admin', 'super_admin')
  )
);
